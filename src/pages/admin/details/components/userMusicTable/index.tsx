import React from "react";
import Card from "../../../components/card";
import Table from "../../../components/table";
import TableRow from "../../../components/tableRow";
import TableCell from "../../../components/tableCell";
import Button from "../../../components/button";
import TableHeaderCell from "../../../components/tableHeaderCell";

type IMusic = {
  id: string;
  lyrics: string;
  audioUrl: string;
};

type Props = {
  musics: IMusic[];
};

const UserMusicTable: React.FC<Props> = ({ musics }) => {
  return (
    <Card>
      <h2>Músicas Geradas</h2>

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
                <Button asLink href={music.audioUrl} download color="green">
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default UserMusicTable;
