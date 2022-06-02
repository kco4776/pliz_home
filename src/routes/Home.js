import { useEffect, useState } from "react";
import PlaylistCard from "../components/PlaylistCard";
import { Link } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(true);
  const [playlist, setPlaylist] = useState([]);
  const getPlaylist = async () => {
    const json = await (
      await fetch(`http://34.64.161.129:5000/playlist-community`)
    ).json();
    const data = json.playlist_community;
    // setPlaylist([...playlist, data].slice(0, 3));
    setPlaylist(data);
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
        // <div>complete</div>
        <div className="container">
          <div className="row">
            {playlist.slice(0, 3).map((pl) => (
              <PlaylistCard
                key={pl.id}
                id={pl.id}
                like={pl.like}
                title={pl.title}
                description={pl.description}
                user_name={pl.user_name}
                comments={pl.comments}
                img={"https://storage.googleapis.com/pliz-bucket/playlist-img/1200px-Meat_eater_ant_feeding_on_honey02.jpeg"}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
