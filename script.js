function suggestHairstyle() {
    const length = document.getElementById("hairLength").value;
    const texture = document.getElementById("hairTexture").value;
    const style = document.getElementById("stylePreference").value;
    let suggestion = "";

    const hairstyles = {
        short: {
            straight: { casual: "Textured Crop", elegant: "Sleek Bob", bold: "Pixie Cut", romantic: "Soft Side Bangs", edgy: "Undercut" },
            wavy: { casual: "Messy Waves", elegant: "Curled Bob", bold: "Tousled Pixie", romantic: "Side Swept Waves", edgy: "Disconnected Bob" },
            curly: { casual: "Curly Undercut", elegant: "Vintage Curls", bold: "Afro Mohawk", romantic: "Curly Bob", edgy: "Razor Cut Curls" },
            coily: { casual: "Tapered Coils", elegant: "Coily Bob", bold: "Shaved Side Coils", romantic: "Soft Coiled Bob", edgy: "Faux Hawk Coils" }
        },
        medium: {
            straight: { casual: "Soft Layers", elegant: "Blunt Cut", bold: "Choppy Lob", romantic: "Feathered Bangs", edgy: "Asymmetrical Cut" },
            wavy: { casual: "Loose Beach Waves", elegant: "Hollywood Waves", bold: "Shag Cut", romantic: "Boho Waves", edgy: "Textured Lob" },
            curly: { casual: "Layered Curls", elegant: "Defined Curls", bold: "Messy Curly Bob", romantic: "Half-Up Curls", edgy: "Curly Wolf Cut" },
            coily: { casual: "Rounded Afro", elegant: "Coily Layers", bold: "Tapered Cut", romantic: "Side-Parted Coils", edgy: "Shaved Side Afro" }
        },
        long: {
            straight: { casual: "Sleek Ponytail", elegant: "Classic Blowout", bold: "Layered V-Cut", romantic: "Soft Curtain Bangs", edgy: "Shag Mullet" },
            wavy: { casual: "Soft Mermaid Waves", elegant: "Glamorous Waves", bold: "Textured Layers", romantic: "Cascading Waves", edgy: "Wavy Wolf Cut" },
            curly: { casual: "Defined Curls", elegant: "Bouncy Curls", bold: "Curly High Pony", romantic: "Voluminous Curls", edgy: "Rockstar Shag" },
            coily: { casual: "Twist-Out Coils", elegant: "Long Coily Layers", bold: "Coily Faux Hawk", romantic: "Half-Up Coils", edgy: "Undercut Coils" }
        }
    };

    suggestion = hairstyles[length]?.[texture]?.[style] || "Classic Layered Cut";

    document.getElementById("result").innerText = "Suggested Hairstyle: " + suggestion;
}
