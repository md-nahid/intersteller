import ContentLoader from 'react-content-loader';

export default function ProductContentLoader() {
  return (
    <ContentLoader
      speed={2}
      width={210}
      height={210}
      viewBox="0 0 210 210"
      backgroundColor="#f1eeee"
      foregroundColor="#d6d6d6"
      uniqueKey="product-grid-loader"
    >
      <rect x="5" y="5" rx="0" ry="0" width="200" height="150" />
      <rect x="5" y="160" rx="0" ry="0" width="200" height="15" />
      <rect x="5" y="180" rx="0" ry="0" width="200" height="10" />
    </ContentLoader>
  );
}
