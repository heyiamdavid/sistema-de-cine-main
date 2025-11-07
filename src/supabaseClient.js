import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://sxefhnnmzdtqrqyndpuq.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4ZWZobm5temR0cXJxeW5kcHVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MTY2NjQsImV4cCI6MjA3ODA5MjY2NH0.0oosMNcR2S_1ZupO9WQtJ7n38P1a8CVqDHdqnWoWKUc'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)