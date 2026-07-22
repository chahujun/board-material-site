-- ========================================
-- Board Material Site — CRM Database Schema
-- Run this in Supabase SQL Editor
-- ========================================

-- 1. Inquiries table (询盘表)
CREATE TABLE IF NOT EXISTS inquiries (
  id BIGSERIAL PRIMARY KEY,
  
  -- 客户信息
  full_name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT,
  
  -- 询盘内容
  category TEXT,           -- 产品品类 (pvc-partition-panels, wpc-wall-panels, etc.)
  product_code TEXT,       -- 产品编号 (PP-001, WP-001, etc.)
  product_name TEXT,        -- 产品名称
  quantity TEXT,            -- 需求数量
  color TEXT,               -- 需求颜色
  delivery_date TEXT,       -- 期望交期
  message TEXT,             -- 询盘留言
  
  -- 管理字段
  status TEXT NOT NULL DEFAULT 'new',
  -- new / contacted / quoted / sample / negotiation / won / lost
  
  priority TEXT NOT NULL DEFAULT 'normal',
  -- high / normal / low
  
  source TEXT NOT NULL DEFAULT 'website',
  -- website / alibaba / email / referral / other
  
  ip_address TEXT,
  user_agent TEXT,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Follow-ups table (跟进记录表)
CREATE TABLE IF NOT EXISTS follow_ups (
  id BIGSERIAL PRIMARY KEY,
  inquiry_id BIGINT NOT NULL REFERENCES inquiries(id) ON DELETE CASCADE,
  
  contact_method TEXT NOT NULL,
  -- email / phone / whatsapp / wechat / video_call / visit / other
  
  contact_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  summary TEXT NOT NULL,    -- 沟通摘要
  next_action TEXT,          -- 下一步行动
  next_action_date DATE,    -- 下一步日期
  
  created_by TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Admin users table (管理员表)
CREATE TABLE IF NOT EXISTS admin_users (
  id BIGSERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  display_name TEXT,
  role TEXT NOT NULL DEFAULT 'admin',
  -- admin / super_admin
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. Email notifications log (邮件通知日志)
CREATE TABLE IF NOT EXISTS notification_logs (
  id BIGSERIAL PRIMARY KEY,
  inquiry_id BIGINT REFERENCES inquiries(id) ON DELETE SET NULL,
  
  type TEXT NOT NULL,
  -- inquiry_received / status_changed / follow_up_added
  
  recipient TEXT NOT NULL,  -- 收件人邮箱
  subject TEXT,
  body TEXT,
  
  status TEXT NOT NULL DEFAULT 'pending',
  -- pending / sent / failed
  
  sent_at TIMESTAMPTZ,
  error TEXT,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ===== Indexes =====
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON inquiries(email);
CREATE INDEX IF NOT EXISTS idx_inquiries_category ON inquiries(category);
CREATE INDEX IF NOT EXISTS idx_inquiries_country ON inquiries(country);
CREATE INDEX IF NOT EXISTS idx_follow_ups_inquiry_id ON follow_ups(inquiry_id);
CREATE INDEX IF NOT EXISTS idx_follow_ups_contact_date ON follow_ups(contact_date DESC);

-- ===== Updated_at trigger =====
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER inquiries_updated_at
  BEFORE UPDATE ON inquiries
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- ===== Row Level Security =====
-- Public can INSERT inquiries (from website form)
-- Only authenticated admin can SELECT/UPDATE/DELETE

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE follow_ups ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE notification_logs ENABLE ROW LEVEL SECURITY;

-- Public INSERT policy for inquiries (anonymous access)
CREATE POLICY "Public can submit inquiries"
  ON inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Admin SELECT/UPDATE/DELETE for inquiries
CREATE POLICY "Admin can read inquiries"
  ON inquiries FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admin can update inquiries"
  ON inquiries FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Admin can delete inquiries"
  ON inquiries FOR DELETE
  TO authenticated
  USING (true);

-- Follow-ups: admin only
CREATE POLICY "Admin can manage follow_ups"
  ON follow_ups FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Admin users: admin only
CREATE POLICY "Admin can manage admin_users"
  ON admin_users FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Notification logs: admin only
CREATE POLICY "Admin can manage notification_logs"
  ON notification_logs FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- ===== Insert default admin user =====
-- Password: admin123 (you should change this immediately after first login)
-- This uses crypt() for password hashing (pgcrypto extension required)
CREATE EXTENSION IF NOT EXISTS pgcrypto;

INSERT INTO admin_users (username, password_hash, display_name, role)
VALUES ('admin', crypt('admin123', gen_salt('bf')), 'Administrator', 'super_admin')
ON CONFLICT (username) DO NOTHING;

-- ===== Done =====
-- After running this script, create the following in Supabase:
-- 1. Go to Settings > API to get your Project URL and anon/service_role keys
-- 2. Set environment variables in Vercel:
--    NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
--    NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx
--    SUPABASE_SERVICE_ROLE_KEY=eyJxxx
--    CRM_ADMIN_USERNAME=admin
--    CRM_ADMIN_PASSWORD=admin123
