import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Playlistdetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState();
  const getPlaylist = async () => {
    const json = await (
      await fetch(`http://34.64.161.129:5000/playlist-community-id/${id}`)
    ).json();
    setInfo(json);
    setLoading(false);
  };
  useEffect(() => {
    getPlaylist();
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : (
        <div className="container">
          <ol className="list-group list-group-numbered">
            {info.song.map((s) => (
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{s.title}</div>
                  {s.singer}
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default Playlistdetail;
