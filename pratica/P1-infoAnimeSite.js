class Anime{
    name;
    year;
    type;
    episodes;
}

const onePiece = new Anime();

onePiece.name = "One Piece";
onePiece.year = "1998";
onePiece.type = "Shounen";
onePiece.episodes = "1.890";

const bleach = new Anime()

bleach.name = "Bleach";
bleach.year = "2005";
bleach.type = "Shounen";
bleach.episodes = "380";

const horimiya = new Anime()

horimiya.name = "Horimiya";
horimiya.year = "2020";
horimiya.type = "Romance";
horimiya.episodes = "24";

console.log(
onePiece, bleach, horimiya
);

