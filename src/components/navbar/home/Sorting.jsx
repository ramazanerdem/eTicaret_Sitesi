const Sorting = ({ setSort }) => {
  return (
    <div className="bg-black bg-opacity-10 my-5 p-4 flex items-center justify-end">
      <select
        onChange={(e) => setSort(e.target.value)}
        className="p-2 rounded-md"
        name=""
        id=""
      >
        <option disabled value="">
          Seçiniz
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  )
}
export default Sorting
