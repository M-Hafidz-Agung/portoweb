// Jika tidak ingin menggunakan API sama sekali, hapus semua kode API dan gunakan data statis berikut:

export default async function getNowPlayingItem() {
    // Data lagu statis, ganti sesuai keinginan
    return {
        albumImageUrl: "https://drive.google.com/file/d/1vdNzy5moTRiQ6-PqXU6FyPZU6hv7SCWk/view?usp=sharing", // Ganti dengan URL cover album lagu
        artist: "Reinth",
        isPlaying: true, // Atur true/false sesuai kebutuhan
        songUrl: "https://open.spotify.com/track/58m3GVOz9cKGnfoBajRQ5C", // Ganti dengan link lagu
        title: "Mangata"
    };
}