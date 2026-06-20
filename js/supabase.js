import {
createClient
}
from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL =
"https://gzrybqpaoakjmmaftqri.supabase.co";

const SUPABASE_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6cnlicXBhb2Fram1tYWZ0cXJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5NTI3MzYsImV4cCI6MjA5NzUyODczNn0.11nB7gouACiMPxUCKM3Hpgr78HDO6uB0BRrtDaBXD8U";

export const supabase =
createClient(
SUPABASE_URL,
SUPABASE_KEY
);
