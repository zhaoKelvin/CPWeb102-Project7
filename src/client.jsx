import { createClient } from "@supabase/supabase-js";

const password = "QiWtQbIxWGzKA3zH"

const URL = "https://pgtdsagdryyzoubqhmnu.supabase.co"

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBndGRzYWdkcnl5em91YnFobW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExODg5MzEsImV4cCI6MTk5Njc2NDkzMX0.G5Q0F_Yo3cQ42sWW-QNKRMfOEiDy3RsqapCVGRD0C4k'

export const supabase = createClient(URL, API_KEY);