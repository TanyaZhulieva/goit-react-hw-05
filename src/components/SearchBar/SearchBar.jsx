export default function SearchBar({ onSearch }) {
  const onSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const request = form.elements.input.value;
    
    console.log(request);

    onSearch(request.trim());
    form.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" name="input" />
        <button type="submit">Search</button>
      </div>
      {/* <Toaster /> */}
    </form>
  );
}
