/* eslint-disable @typescript-eslint/no-explicit-any */
import Insta from "../../assets/icone_insta.png";
import Whats from "../../assets/icone_whats.png";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { getLyricsToMessage } from "../../service";
import { useLocation } from "react-router";
import Download from "../../assets/download-music.png";


export const Player = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    const [lyrics, setLyrics] = useState("");
    const [audioUrls, setAudioUrls] = useState<string[]>([]);


    useEffect(() => {
        console.log("Executando busca de letras...");

        const fetchLyrics = async () => {
            try {
                if (id) {
                    const response = await getLyricsToMessage(id);

                    if (response) {
                        setLyrics(response.lyrics);
                        setAudioUrls(response.audio_urls);
                    } else {
                        console.error("Resposta nula recebida");
                    }
                } else {
                    console.error("ID não fornecido");
                }
            } catch (error) {
                console.error("Erro ao buscar letras:", error);
            }
        };
        if (id) {
            fetchLyrics();
        }
    }, [id]);



    return (
        <Container>
            <div className="content">
                <h1>BORA ESCUTAR UMA MÚSICA?</h1>

                <p className="description">
                    Seu amigo Sagalover te mandou uma música feita especialmente pra você, pra que você consiga sentir o ritmo da Sagatiba com Maiara e Maraisa!
                </p>

                {audioUrls.length > 0 && (
                    <div className="audio-content">
                        <div id="waveform" />
                        <audio controls>
                            <source src={audioUrls[0]} type="audio/mpeg" />
                            Seu navegador não suporta o elemento de áudio.
                        </audio>
                    </div>
                )}

                <div className="container-info">
                  <div className="download-img">
                    <img src={Download} alt="" />
                  </div>
                  <div className="lyrics">
                    <div className="lyrics-holder">
                    <pre>{lyrics}</pre>
                    </div>
                  </div>
                </div>

                <div className="share">
                    <p>compartilhe </p>

                    <div className="socials">
                        <img src={Whats} alt="" />
                        <img src={Insta} alt="" />
                    </div>
                </div>

                <p className="advise">
                    Mas não esquece: rolê bom, é rolê consciente. <br />
                    Só compartilhe com maiores de 18 anos.
                </p>
            </div>
        </Container>
    );
};


