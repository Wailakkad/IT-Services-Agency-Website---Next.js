import Head from 'next/head';

type SeoProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
};

export const Seo = ({
  title,
  description,
  url = 'https://it-services-agency-website-next-js-theta.vercel.app/', // 🔁 Replace with your real domain
  image = 'https://it-services-agency-website-next-js-theta.vercel.app/seoIMG.jpeg', // 📸 Add your own social preview image
}: SeoProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href={url} />


      {/* ✅ Favicon */}
    <link rel="icon" href="/favicon.png" type="image/png" />

    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:type" content="website" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    
  </Head>
);
