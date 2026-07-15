import React from "react";

// 轻量级 Markdown 渲染器（无需额外依赖）
// 支持子集：h1/h2/h3、段落、无序/有序列表、表格、引用、行内 bold/italic/link/code
// 专为博客 placeholder 内容设计

// 解析行内格式：**bold** *italic* [text](url) `code`
function parseInline(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const regex =
    /(\*\*([^*]+)\*\*)|(\*([^*]+)\*)|(\[([^\]]+)\]\(([^)]+)\))|(`([^`]+)`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let idx = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[2] !== undefined) {
      nodes.push(
        <strong key={`${keyPrefix}-b-${idx}`}>{match[2]}</strong>
      );
    } else if (match[4] !== undefined) {
      nodes.push(<em key={`${keyPrefix}-i-${idx}`}>{match[4]}</em>);
    } else if (match[6] !== undefined) {
      nodes.push(
        <a key={`${keyPrefix}-a-${idx}`} href={match[7]}>
          {match[6]}
        </a>
      );
    } else if (match[9] !== undefined) {
      nodes.push(
        <code key={`${keyPrefix}-c-${idx}`} className="md-code">
          {match[9]}
        </code>
      );
    }
    lastIndex = regex.lastIndex;
    idx++;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

// 判断是否为表格行
function isTableRow(line: string): boolean {
  return line.trim().startsWith("|") && line.trim().endsWith("|");
}

// 判断是否为表格分隔行 | --- | --- |
function isTableSeparator(line: string): boolean {
  return /^\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?$/.test(line.trim());
}

// 解析表格行为单元格数组
function parseRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

// 主渲染函数：逐行解析为 React 节点数组
export function renderMarkdown(content: string): React.ReactNode[] {
  const lines = content.split("\n");
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // 空行
    if (trimmed === "") {
      i++;
      continue;
    }

    // 标题
    if (trimmed.startsWith("### ")) {
      blocks.push(
        <h3 key={key++}>{parseInline(trimmed.slice(4), `h3-${key}`)}</h3>
      );
      i++;
      continue;
    }
    if (trimmed.startsWith("## ")) {
      blocks.push(
        <h2 key={key++}>{parseInline(trimmed.slice(3), `h2-${key}`)}</h2>
      );
      i++;
      continue;
    }
    if (trimmed.startsWith("# ")) {
      blocks.push(
        <h2 key={key++}>{parseInline(trimmed.slice(2), `h1-${key}`)}</h2>
      );
      i++;
      continue;
    }

    // 引用块
    if (trimmed.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("> ")) {
        quoteLines.push(lines[i].trim().slice(2));
        i++;
      }
      blocks.push(
        <blockquote key={key++}>
          {parseInline(quoteLines.join(" "), `bq-${key}`)}
        </blockquote>
      );
      continue;
    }

    // 表格
    if (isTableRow(trimmed)) {
      const tableLines: string[] = [];
      while (i < lines.length && isTableRow(lines[i].trim())) {
        tableLines.push(lines[i].trim());
        i++;
      }
      // 第一行表头，第二行分隔，其余为数据行
      const header = parseRow(tableLines[0]);
      const bodyRows = tableLines
        .slice(1)
        .filter((l) => !isTableSeparator(l))
        .map(parseRow);

      blocks.push(
        <div className="table-wrap" key={key++}>
          <table>
            <thead>
              <tr>
                {header.map((cell, ci) => (
                  <th key={ci}>{parseInline(cell, `th-${key}-${ci}`)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>{parseInline(cell, `td-${key}-${ri}-${ci}`)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // 有序列表
    if (/^\d+\.\s/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      blocks.push(
        <ol key={key++}>
          {items.map((item, ii) => (
            <li key={ii}>{parseInline(item, `ol-${key}-${ii}`)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // 无序列表
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const items: string[] = [];
      while (
        i < lines.length &&
        (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))
      ) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      blocks.push(
        <ul key={key++}>
          {items.map((item, ii) => (
            <li key={ii}>{parseInline(item, `ul-${key}-${ii}`)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // 段落（收集连续的普通行）
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].trim().startsWith("#") &&
      !lines[i].trim().startsWith("> ") &&
      !lines[i].trim().startsWith("- ") &&
      !lines[i].trim().startsWith("* ") &&
      !/^\d+\.\s/.test(lines[i].trim()) &&
      !isTableRow(lines[i].trim())
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }
    blocks.push(
      <p key={key++}>{parseInline(paraLines.join(" "), `p-${key}`)}</p>
    );
  }

  return blocks;
}
