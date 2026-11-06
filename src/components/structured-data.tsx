// biome-ignore-all lint/security/noDangerouslySetInnerHtml: JSON-LD is generated from local, trusted data.

type StructuredDataProps = {
  data: unknown;
};

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
