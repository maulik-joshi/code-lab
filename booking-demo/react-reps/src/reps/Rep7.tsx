type ItemProps = {
  label: string;
  onSelect: (value: string) => void;
};

function Item({ label, onSelect }: ItemProps) {
  return (
    <button
      style={{ display: "block", marginBottom: 10 }}
      onClick={() => onSelect(label)}
    >
      {label}
    </button>
  );
}

function Rep7() {
  const handleSelect = (value: string) => {
    console.log("Selected:", value);
  };

  return (
    <div style={{ padding: 40 }}>
      <Item label="Option A" onSelect={handleSelect} />
      <Item label="Option B" onSelect={handleSelect} />
      <Item label="Option C" onSelect={handleSelect} />
    </div>
  );
}

export default Rep7;
