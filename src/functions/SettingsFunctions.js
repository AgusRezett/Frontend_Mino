
export const modalAction = (action = 0) => {
    const modal = document.getElementById('settings-modal-container');
    const overlay = document.getElementById('dark-modal-overlay');

    if (action === 1) {
        // Open modal
        modal.classList.add('settings-modal-container-active');
        overlay.classList.add('dark-modal-overlay-active');
    } else if (action === 2) {
        // Close modal
        modal.classList.remove('settings-modal-container-active');
        overlay.classList.remove('dark-modal-overlay-active');
    } else {
        // Toggle modal status
        modal.classList.toggle('settings-modal-container-active');
        overlay.classList.toggle('dark-modal-overlay-active');
    }
}


export const themesImages = [
    {
        name: 'theme.option.system',
        theme: "system",
        colors: {
            primary: "#f7f7f7",
            background: "#f7f7f7",
            font: "#212529"
        }
    },
    {
        name: 'theme.option.light',
        theme: "light",
        colors: {
            primary: "#fff",
            background: "#E7E8EB",
            font: "#212529"
        }
    },
    {
        name: 'theme.option.dark',
        theme: "dark",
        colors: {
            primary: "#62707c",
            background: "#47525b",
            font: "#fff"
        }
    },
    {
        name: 'theme.option.dark-high',
        theme: "dark-high",
        colors: {
            primary: "#27282D",
            background: "#1F2023",
            font: "#F8F8F8"
        }
    },
    {
        name: 'theme.option.candy',
        theme: "candy",
        colors: {
            primary: "#FFEEED",
            background: "#FFC2C0",
            font: "#4A154B"
        }
    },
]

export const getAccountInfo = () => {
    return {
        email: "nazareno.agustin45@gmail.com",
        phone: "+54 9 11 2170-7490",
        /* email: "",
        phone: "", */
        person: {
            name: "Agustin",
            secondname: "Nazareno",
            surname: "Rezett",
            id_type: "DNI",
            id_value: "44.749.102",
            password: "Holaquetal_1"
        },
        verified: true
    }
}