import React from "react";
import Card from "../../../components/card";
import Table from "../../../components/table";
import TableRow from "../../../components/tableRow";
import TableCell from "../../../components/tableCell";
import Button from "../../../components/button";
import TableHeaderCell from "../../../components/tableHeaderCell";
import { BASE_URL } from "../../../../../service/adminService";
import { toast } from "react-toastify";
import Spinner from "../../../../components/spinner";

type IMusic = {
  id: string;
  lyrics: string;
  audioUrls: string[];
};

type Props = {
  musics: IMusic[];
  isLoading: boolean;
};

const UserMusicTable: React.FC<Props> = ({ musics, isLoading }) => {
  const handleDownloadSongs = async (music: IMusic) => {
    try {
      const audios = await Promise.all([
        fetch(`${BASE_URL}/${music.audioUrls[0]}`),
        fetch(`${BASE_URL}/${music.audioUrls[1]}`),
      ]);

      let index = 1;
      for (const audio of audios) {
        if (!audio.ok) {
          toast.error(`Falha ao baixar áudio ${index}`);
          return;
        }

        const blob = await audio.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const filename = `sagatiba_${music.id}_${index}.mp3`;
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        index++;
      }
    } catch (error) {
      console.error("Erro ao baixar os arquivos:", error);
      alert("Erro ao baixar os arquivos: " + (error as Error).message);
    }
  };

  return (
    <Card>
      <h2>Músicas Geradas</h2>

      {isLoading && (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner
            style={{
              height: "48px",
              width: "48px",
              borderTopColor: "#007bff",
            }}
          />
        </div>
      )}

      {!isLoading && (
        <Table>
          <thead style={{ backgroundColor: "#f2f2f2" }}>
            <TableRow>
              <TableHeaderCell>Letra da Música</TableHeaderCell>

              <TableHeaderCell>Ações</TableHeaderCell>
            </TableRow>
          </thead>

          <tbody>
            {musics.map((music) => (
              <TableRow key={music.id}>
                <TableCell>{music.lyrics}</TableCell>

                <TableCell>
                  <Button
                    color="green"
                    onClick={() => handleDownloadSongs(music)}
                  >
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      )}
    </Card>
  );
};

export default UserMusicTable;
