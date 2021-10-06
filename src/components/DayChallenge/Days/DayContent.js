const DayContent = ({ title, img, desc, link }) => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <img
        src={`${img}`}
        alt={title}
        style={{ height: "300px", border: "solid 2px black" }}
      />
      <div
        style={{
          padding: "1rem",
          width: "50%",
          backgroundColor: "lightsalmon",
          margin: "0 auto",
          borderRadius: "5px",
        }}
      >
        <p>{desc}</p>
        <p>{link && <a href={`${link}`}>{title}</a>}</p>
      </div>
    </>
  );
};
export default DayContent;
