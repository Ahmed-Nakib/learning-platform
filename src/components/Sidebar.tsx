export default function Sidebar({ data, onSelectCategory } : any) {
  return (
    <div style={{ width: "200px" }}>
      {data.map((cat: any, i:any)  => (
        <div
          key={i}
          onClick={() => onSelectCategory(cat)}
          style={{ cursor: "pointer", padding: "10px" }}
        >
          {cat.category}
        </div>
      ))}
    </div>
  );
}