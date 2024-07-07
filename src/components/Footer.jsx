export default function Footer({ items }) {
    const totalList = [...items];

    if (totalList.length === 0)
        return <footer className="stats">Daftar Belanja Kosong</footer>;

    const listChacked = totalList.filter((item) => item.checked === true);
    const percent = Math.round((listChacked.length / totalList.length) * 100);

    return (
        <footer className="stats">
        Ada {totalList.length} barang di daftar belanjaan, {listChacked.length}{" "}
        barang sudah dibeli ({percent}%)
        </footer>
    );
}
