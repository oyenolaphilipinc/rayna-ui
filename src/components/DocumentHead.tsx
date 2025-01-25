import { Helmet } from "react-helmet";

interface Props {
  title: string;
  description: string;
  keywords?: string;
}

export default function DocumentHead({ title, description, keywords }: Props) {
  return (
    <Helmet>
      <title>{title} | Techbor Consulting</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/techbor.svg" />
      <link rel="icon" type="image/png" href="/techbor.svg" />
      <link rel="apple-touch-icon" href="/techbor.svg" />

      {/* Open Graph / Social Media */}
      <meta property="og:title" content={`${title} | Techbor Consulting`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Techbor Consulting" />
      <meta property="og:image" content="/techbor.svg" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | Techbor Consulting`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/techbor.svg" />
    </Helmet>
  );
} 