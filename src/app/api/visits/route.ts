// src/app/api/visits/route.ts
import { NextResponse } from 'next/server';
// ✅ Ruta relativa correcta desde src/app/api/visits/route.ts
import { createClient } from '../../../../lib/supabaseClient';

export async function GET() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('visits')
    .select('count')
    .eq('slug', 'home')
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ count: data.count });
}

export async function POST() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('visits')
    .upsert({ slug: 'home', count: 1 }, { onConflict: 'slug', ignoreDuplicates: false, count: 'exact' })
    .select();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (data)  return NextResponse.json({ count: data[0].count });

  await supabase.rpc('increment_visit', { page_slug: 'home' });

  return NextResponse.json({ success: true });
}
