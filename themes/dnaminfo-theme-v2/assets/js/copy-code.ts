globalThis.copyText = (text: string) => {
  if (!navigator.clipboard) {
    alert("Your browser doesn't support copy to clipboard");
    return;
  }
  navigator.clipboard.writeText(text).then(
    () => alert("code copied to clipboard!"),
    (err) => alert(err)
  );
};
