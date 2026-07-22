"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./CRMApp.module.css";

// ===== Types =====
interface Inquiry {
  id: number;
  full_name: string;
  company: string | null;
  email: string;
  phone: string | null;
  country: string | null;
  category: string | null;
  product_code: string | null;
  product_name: string | null;
  quantity: string | null;
  color: string | null;
  delivery_date: string | null;
  message: string | null;
  status: string;
  priority: string;
  source: string;
  created_at: string;
  updated_at: string;
}

interface FollowUp {
  id: number;
  inquiry_id: number;
  contact_method: string;
  contact_date: string;
  summary: string;
  next_action: string | null;
  next_action_date: string | null;
  created_by: string;
  created_at: string;
}

interface Stats {
  total: number;
  statusCounts: Record<string, number>;
  trend: Record<string, number>;
  topCountries: [string, number][];
  topCategories: [string, number][];
  conversionRate: string;
  recentCount: number;
}

const STATUS_OPTIONS = [
  { value: "new", label: "New", color: "#3b82f6" },
  { value: "contacted", label: "Contacted", color: "#06b6d4" },
  { value: "quoted", label: "Quoted", color: "#8b5cf6" },
  { value: "sample", label: "Sample Sent", color: "#f59e0b" },
  { value: "negotiation", label: "Negotiation", color: "#ec4899" },
  { value: "won", label: "Won", color: "#10b981" },
  { value: "lost", label: "Lost", color: "#ef4444" },
];

const PRIORITY_OPTIONS = [
  { value: "high", label: "High", color: "#ef4444" },
  { value: "normal", label: "Normal", color: "#3b82f6" },
  { value: "low", label: "Low", color: "#8b9199" },
];

const CONTACT_METHODS = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "wechat", label: "WeChat" },
  { value: "video_call", label: "Video Call" },
  { value: "visit", label: "Visit" },
  { value: "other", label: "Other" },
];

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getStatusColor(status: string): string {
  return STATUS_OPTIONS.find((s) => s.value === status)?.color || "#8b9199";
}

function getStatusLabel(status: string): string {
  return STATUS_OPTIONS.find((s) => s.value === status)?.label || status;
}

// ===== Main Component =====
export default function CRMApp() {
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<"dashboard" | "list" | "detail">("dashboard");
  const [selectedInquiryId, setSelectedInquiryId] = useState<number | null>(null);

  // Check auth on mount
  useEffect(() => {
    fetch("/api/admin/login")
      .then((r) => r.json())
      .then((data) => {
        setAuthed(data.authenticated);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.spinner} />
        <p>Loading CRM...</p>
      </div>
    );
  }

  if (!authed) {
    return <LoginView onSuccess={() => setAuthed(true)} />;
  }

  return (
    <div className={styles.crmApp}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <span className={styles.logoMark}>CRM</span>
          <span className={styles.logoText}>Board Material</span>
        </div>
        <nav className={styles.sidebarNav}>
          <button
            className={`${styles.navBtn} ${view === "dashboard" ? styles.navBtnActive : ""}`}
            onClick={() => setView("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`${styles.navBtn} ${view === "list" ? styles.navBtnActive : ""}`}
            onClick={() => setView("list")}
          >
            Inquiries
          </button>
        </nav>
        <button
          className={styles.logoutBtn}
          onClick={() => {
            document.cookie = "crm_session=; path=/; max-age=0";
            setAuthed(false);
          }}
        >
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className={styles.mainContent}>
        {view === "dashboard" && <DashboardView />}
        {view === "list" && (
          <ListView
            onSelect={(id) => {
              setSelectedInquiryId(id);
              setView("detail");
            }}
          />
        )}
        {view === "detail" && selectedInquiryId && (
          <DetailView
            inquiryId={selectedInquiryId}
            onBack={() => setView("list")}
          />
        )}
      </main>
    </div>
  );
}

// ===== Login View =====
function LoginView({ onSuccess }: { onSuccess: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        onSuccess();
      } else {
        setError(data.error || "Login failed");
      }
    } catch {
      setError("Network error. Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <div className={styles.loginHeader}>
          <span className={styles.loginLogo}>CRM</span>
          <h1>Board Material CRM</h1>
          <p>Sign in to manage your inquiries</p>
        </div>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              required
              autoFocus
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          {error && <div className={styles.errorMsg}>{error}</div>}
          <button type="submit" className={styles.loginBtn} disabled={submitting}>
            {submitting ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <div className={styles.loginHint}>
          Default: admin / admin123 (change after first login)
        </div>
      </div>
    </div>
  );
}

// ===== Dashboard View =====
function DashboardView() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((r) => r.json())
      .then((data) => {
        if (!data.error) setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.spinner} />
      </div>
    );
  }

  if (!stats) {
    return (
      <div className={styles.emptyState}>
        <h2>Database not configured</h2>
        <p>Please set up Supabase environment variables to start receiving inquiries.</p>
      </div>
    );
  }

  const trendValues = Object.values(stats.trend);
  const maxTrend = Math.max(...trendValues, 1);

  return (
    <div className={styles.dashboard}>
      <div className={styles.pageHeader}>
        <h1>Dashboard</h1>
        <span className={styles.pageSub}>Overview of your inquiries and conversion</span>
      </div>

      {/* Stat cards */}
      <div className={styles.statGrid}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Total Inquiries</span>
          <span className={styles.statValue}>{stats.total}</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>New (7 days)</span>
          <span className={styles.statValue}>{stats.recentCount}</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Won</span>
          <span className={styles.statValue} style={{ color: "#10b981" }}>
            {stats.statusCounts.won || 0}
          </span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Conversion Rate</span>
          <span className={styles.statValue} style={{ color: "#8b5cf6" }}>
            {stats.conversionRate}%
          </span>
        </div>
      </div>

      {/* Status breakdown */}
      <div className={styles.sectionCard}>
        <h2 className={styles.sectionTitle}>Inquiry Status Breakdown</h2>
        <div className={styles.statusBars}>
          {STATUS_OPTIONS.map((status) => {
            const count = stats.statusCounts[status.value] || 0;
            const pct = stats.total ? (count / stats.total) * 100 : 0;
            return (
              <div key={status.value} className={styles.statusBarRow}>
                <span className={styles.statusBarLabel} style={{ color: status.color }}>
                  {status.label}
                </span>
                <div className={styles.statusBarTrack}>
                  <div
                    className={styles.statusBarFill}
                    style={{ width: `${pct}%`, backgroundColor: status.color }}
                  />
                </div>
                <span className={styles.statusBarCount}>{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 7-day trend */}
      <div className={styles.sectionCard}>
        <h2 className={styles.sectionTitle}>Inquiry Trend (7 days)</h2>
        <div className={styles.trendChart}>
          {Object.entries(stats.trend).map(([date, count]) => {
            const d = new Date(date);
            const label = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
            return (
              <div key={date} className={styles.trendBar}>
                <div
                  className={styles.trendBarFill}
                  style={{ height: `${(count / maxTrend) * 100}%` }}
                  title={`${label}: ${count} inquiries`}
                />
                <span className={styles.trendBarLabel}>{label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top countries & categories */}
      <div className={styles.twoCol}>
        <div className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>Top Countries</h2>
          {stats.topCountries.length > 0 ? (
            <div className={styles.rankList}>
              {stats.topCountries.map(([country, count], i) => (
                <div key={country} className={styles.rankItem}>
                  <span className={styles.rankNum}>{i + 1}</span>
                  <span className={styles.rankLabel}>{country}</span>
                  <span className={styles.rankCount}>{count}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.emptyText}>No data yet</p>
          )}
        </div>
        <div className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>Top Categories</h2>
          {stats.topCategories.length > 0 ? (
            <div className={styles.rankList}>
              {stats.topCategories.map(([category, count], i) => (
                <div key={category} className={styles.rankItem}>
                  <span className={styles.rankNum}>{i + 1}</span>
                  <span className={styles.rankLabel}>{category}</span>
                  <span className={styles.rankCount}>{count}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.emptyText}>No data yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

// ===== List View =====
function ListView({ onSelect }: { onSelect: (id: number) => void }) {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const fetchInquiries = useCallback(() => {
    setLoading(true);
    const params = new URLSearchParams({
      page: String(page),
      limit: "20",
      status: statusFilter,
      search,
    });
    fetch(`/api/admin/inquiries?${params}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.inquiries) {
          setInquiries(data.inquiries);
          setTotalPages(data.totalPages);
          setTotal(data.total);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [page, statusFilter, search]);

  useEffect(() => {
    fetchInquiries();
  }, [fetchInquiries]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    setSearch(searchInput);
  };

  return (
    <div className={styles.listView}>
      <div className={styles.pageHeader}>
        <h1>Inquiries</h1>
        <span className={styles.pageSub}>{total} total inquiries</span>
      </div>

      {/* Filters */}
      <div className={styles.filterBar}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search name, email, company, country..."
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchBtn}>Search</button>
        </form>
        <div className={styles.statusFilters}>
          <button
            className={`${styles.filterChip} ${statusFilter === "all" ? styles.filterChipActive : ""}`}
            onClick={() => { setStatusFilter("all"); setPage(1); }}
          >
            All
          </button>
          {STATUS_OPTIONS.map((s) => (
            <button
              key={s.value}
              className={`${styles.filterChip} ${statusFilter === s.value ? styles.filterChipActive : ""}`}
              onClick={() => { setStatusFilter(s.value); setPage(1); }}
              style={statusFilter === s.value ? { borderColor: s.color, color: s.color } : {}}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <div className={styles.loadingScreen}><div className={styles.spinner} /></div>
      ) : inquiries.length === 0 ? (
        <div className={styles.emptyState}>
          <h2>No inquiries found</h2>
          <p>Inquiries from your website will appear here.</p>
        </div>
      ) : (
        <div className={styles.tableWrap}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Country</th>
                <th>Product</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inq) => (
                <tr key={inq.id} className={styles.tableRow}>
                  <td className={styles.cellId}>#{inq.id}</td>
                  <td>
                    <div className={styles.cellCustomer}>
                      <span className={styles.cellName}>{inq.full_name}</span>
                      {inq.company && <span className={styles.cellCompany}>{inq.company}</span>}
                      <span className={styles.cellEmail}>{inq.email}</span>
                    </div>
                  </td>
                  <td>{inq.country || "-"}</td>
                  <td>
                    <div className={styles.cellProduct}>
                      {inq.product_code && <span className={styles.productCode}>{inq.product_code}</span>}
                      <span className={styles.productCategory}>{inq.category || "-"}</span>
                    </div>
                  </td>
                  <td>
                    <span
                      className={styles.statusBadge}
                      style={{ backgroundColor: `${getStatusColor(inq.status)}20`, color: getStatusColor(inq.status) }}
                    >
                      {getStatusLabel(inq.status)}
                    </span>
                  </td>
                  <td>
                    <span
                      className={styles.priorityBadge}
                      style={{
                        color: PRIORITY_OPTIONS.find((p) => p.value === inq.priority)?.color,
                      }}
                    >
                      {PRIORITY_OPTIONS.find((p) => p.value === inq.priority)?.label || inq.priority}
                    </span>
                  </td>
                  <td className={styles.cellDate}>{formatDate(inq.created_at)}</td>
                  <td>
                    <button
                      className={styles.viewBtn}
                      onClick={() => onSelect(inq.id)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            className={styles.pageBtn}
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>
          <span className={styles.pageInfo}>Page {page} / {totalPages}</span>
          <button
            className={styles.pageBtn}
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

// ===== Detail View =====
function DetailView({ inquiryId, onBack }: { inquiryId: number; onBack: () => void }) {
  const [inquiry, setInquiry] = useState<Inquiry | null>(null);
  const [followUps, setFollowUps] = useState<FollowUp[]>([]);
  const [loading, setLoading] = useState(true);

  // Follow-up form state
  const [fuMethod, setFuMethod] = useState("email");
  const [fuSummary, setFuSummary] = useState("");
  const [fuNextAction, setFuNextAction] = useState("");
  const [fuNextDate, setFuNextDate] = useState("");
  const [fuStatusUpdate, setFuStatusUpdate] = useState("");
  const [submittingFu, setSubmittingFu] = useState(false);

  const fetchDetail = useCallback(() => {
    fetch(`/api/admin/inquiries/${inquiryId}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.inquiry) {
          setInquiry(data.inquiry);
          setFollowUps(data.followUps || []);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [inquiryId]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  const handleStatusChange = async (newStatus: string) => {
    if (!inquiry) return;
    await fetch(`/api/admin/inquiries/${inquiry.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    fetchDetail();
  };

  const handlePriorityChange = async (newPriority: string) => {
    if (!inquiry) return;
    await fetch(`/api/admin/inquiries/${inquiry.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priority: newPriority }),
    });
    fetchDetail();
  };

  const handleAddFollowUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiry || !fuSummary) return;
    setSubmittingFu(true);
    await fetch("/api/admin/follow-ups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        inquiryId: inquiry.id,
        contactMethod: fuMethod,
        summary: fuSummary,
        nextAction: fuNextAction || null,
        nextActionDate: fuNextDate || null,
        updateStatus: fuStatusUpdate || undefined,
      }),
    });
    setFuSummary("");
    setFuNextAction("");
    setFuNextDate("");
    setFuStatusUpdate("");
    fetchDetail();
    setSubmittingFu(false);
  };

  if (loading) {
    return <div className={styles.loadingScreen}><div className={styles.spinner} /></div>;
  }

  if (!inquiry) {
    return (
      <div className={styles.emptyState}>
        <h2>Inquiry not found</h2>
        <button onClick={onBack} className={styles.backBtn}>Back to list</button>
      </div>
    );
  }

  return (
    <div className={styles.detailView}>
      <div className={styles.pageHeader}>
        <button onClick={onBack} className={styles.backBtn}>← Back to list</button>
        <h1>Inquiry #{inquiry.id}</h1>
        <span className={styles.pageSub}>Created: {formatDate(inquiry.created_at)}</span>
      </div>

      <div className={styles.detailGrid}>
        {/* Left: Inquiry info */}
        <div className={styles.detailMain}>
          {/* Customer info */}
          <div className={styles.detailCard}>
            <h2 className={styles.detailCardTitle}>Customer Information</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Name</span>
                <span className={styles.infoValue}>{inquiry.full_name}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Company</span>
                <span className={styles.infoValue}>{inquiry.company || "-"}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email</span>
                <a href={`mailto:${inquiry.email}`} className={styles.infoLink}>{inquiry.email}</a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Phone</span>
                <span className={styles.infoValue}>{inquiry.phone || "-"}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Country</span>
                <span className={styles.infoValue}>{inquiry.country || "-"}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Source</span>
                <span className={styles.infoValue}>{inquiry.source}</span>
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className={styles.detailCard}>
            <h2 className={styles.detailCardTitle}>Product & Inquiry Details</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Category</span>
                <span className={styles.infoValue}>{inquiry.category || "-"}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Product Code</span>
                <span className={styles.infoValue}>{inquiry.product_code || "-"}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Product Name</span>
                <span className={styles.infoValue}>{inquiry.product_name || "-"}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Quantity</span>
                <span className={styles.infoValue}>{inquiry.quantity || "-"}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Color</span>
                <span className={styles.infoValue}>{inquiry.color || "-"}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Delivery Date</span>
                <span className={styles.infoValue}>{inquiry.delivery_date || "-"}</span>
              </div>
            </div>
            {inquiry.message && (
              <div className={styles.messageBlock}>
                <span className={styles.infoLabel}>Customer Message</span>
                <p className={styles.messageText}>{inquiry.message}</p>
              </div>
            )}
          </div>

          {/* Follow-up timeline */}
          <div className={styles.detailCard}>
            <h2 className={styles.detailCardTitle}>Follow-up Timeline ({followUps.length})</h2>
            {followUps.length === 0 ? (
              <p className={styles.emptyText}>No follow-ups yet. Add the first one below.</p>
            ) : (
              <div className={styles.timeline}>
                {followUps.map((fu) => (
                  <div key={fu.id} className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineHeader}>
                        <span className={styles.timelineMethod}>
                          {CONTACT_METHODS.find((m) => m.value === fu.contact_method)?.label || fu.contact_method}
                        </span>
                        <span className={styles.timelineDate}>{formatDate(fu.contact_date)}</span>
                      </div>
                      <p className={styles.timelineSummary}>{fu.summary}</p>
                      {fu.next_action && (
                        <div className={styles.timelineNext}>
                          <span className={styles.nextLabel}>Next:</span>
                          <span>{fu.next_action}</span>
                          {fu.next_action_date && (
                            <span className={styles.nextDate}>
                              by {new Date(fu.next_action_date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Add follow-up form */}
            <form onSubmit={handleAddFollowUp} className={styles.followUpForm}>
              <h3 className={styles.formTitle}>Add Follow-up</h3>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Contact Method</label>
                  <select value={fuMethod} onChange={(e) => setFuMethod(e.target.value)}>
                    {CONTACT_METHODS.map((m) => (
                      <option key={m.value} value={m.value}>{m.label}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Update Status To (optional)</label>
                  <select value={fuStatusUpdate} onChange={(e) => setFuStatusUpdate(e.target.value)}>
                    <option value="">— No change —</option>
                    {STATUS_OPTIONS.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Summary *</label>
                <textarea
                  value={fuSummary}
                  onChange={(e) => setFuSummary(e.target.value)}
                  placeholder="What was discussed? What did the customer say?"
                  rows={3}
                  required
                />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Next Action</label>
                  <input
                    type="text"
                    value={fuNextAction}
                    onChange={(e) => setFuNextAction(e.target.value)}
                    placeholder="e.g., Send quotation, Follow up on sample"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Next Action Date</label>
                  <input
                    type="date"
                    value={fuNextDate}
                    onChange={(e) => setFuNextDate(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className={styles.submitBtn} disabled={submittingFu}>
                {submittingFu ? "Adding..." : "Add Follow-up"}
              </button>
            </form>
          </div>
        </div>

        {/* Right: Status sidebar */}
        <div className={styles.detailSidebar}>
          <div className={styles.detailCard}>
            <h2 className={styles.detailCardTitle}>Status</h2>
            <div className={styles.statusSelector}>
              {STATUS_OPTIONS.map((s) => (
                <button
                  key={s.value}
                  className={`${styles.statusOption} ${inquiry.status === s.value ? styles.statusOptionActive : ""}`}
                  style={inquiry.status === s.value ? { backgroundColor: s.color, borderColor: s.color } : {}}
                  onClick={() => handleStatusChange(s.value)}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <div className={styles.divider} />
            <h3 className={styles.sidebarSubTitle}>Priority</h3>
            <div className={styles.prioritySelector}>
              {PRIORITY_OPTIONS.map((p) => (
                <button
                  key={p.value}
                  className={`${styles.priorityOption} ${inquiry.priority === p.value ? styles.priorityOptionActive : ""}`}
                  style={inquiry.priority === p.value ? { borderColor: p.color, color: p.color } : {}}
                  onClick={() => handlePriorityChange(p.value)}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div className={styles.detailCard}>
            <h2 className={styles.detailCardTitle}>Quick Actions</h2>
            <a href={`mailto:${inquiry.email}`} className={styles.quickActionBtn}>
              Reply by Email
            </a>
            {inquiry.phone && (
              <a href={`tel:${inquiry.phone}`} className={styles.quickActionBtn}>
                Call: {inquiry.phone}
              </a>
            )}
            <a
              href={`https://wa.me/${inquiry.phone?.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.quickActionBtn}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
