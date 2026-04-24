const SUPABASE_URL = 'https://qmzeksrduyctlwbkxiia.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtemVrc3JkdXljdGx3Ymt4aWlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwMTM1OTQsImV4cCI6MjA5MjU4OTU5NH0.M-8GeexKGhaueNlQvYrP2F3nsQjau6VAHlLQBLYOj80';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

window.dataSdk = {
  // Simpan jawaban baru
  create: async (data) => {
    const { error } = await supabaseClient.from('submissions').insert([data]);
    return { isOk: !error, error };
  },

  // Ambil daftar jawaban
  list: async () => {
    const { data, error } = await supabaseClient
      .from('submissions')
      .select('*')
      .order('created_at', { ascending: false });
    return data;
  },

  // Update feedback/nilai oleh tutor
  update: async (id, updates) => {
    const { error } = await supabaseClient
      .from('submissions')
      .update(updates)
      .eq('id', id);
    return { isOk: !error, error };
  },

  // Hapus jawaban (Reset)
  delete: async (id) => {
    const { error } = await supabaseClient
      .from('submissions')
      .delete()
      .eq('id', id);
    return { isOk: !error, error };
  },

  // Catat login absensi
  logActivity: async (log) => {
    const { error } = await supabaseClient.from('logins').insert([log]);
    return { isOk: !error, error };
  }
};
