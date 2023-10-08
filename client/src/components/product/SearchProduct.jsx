const SearchProduct = () => {
  const handleSearchProduct = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="search for product"
          onChange={handleSearchProduct}
        />
      </form>
    </>
  );
};

export default SearchProduct;
