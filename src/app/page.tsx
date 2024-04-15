const mockUrls = [
  "https://utfs.io/f/79280897-c9fd-4f14-94a3-d69183d928cd-7m7cwc.png",
  "https://utfs.io/f/8ffb19de-cf14-4ab1-b39e-0f23e63ce4a8-7mr5hp.png",
  "https://utfs.io/f/5922e1ba-471e-4ec3-97c0-77518dfa664e-75ow3z.png",
  "https://utfs.io/f/98fb6a3e-dd5e-4b79-8849-cc85b02cf4f4-754gj3.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
