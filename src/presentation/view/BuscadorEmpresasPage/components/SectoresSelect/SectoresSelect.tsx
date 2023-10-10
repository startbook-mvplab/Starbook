import { CssTextField } from "@/presentation/styles/styles";
import { MenuItem } from "@mui/material";
import { useContext, useState } from "react";
import { BuscadorEmpresasContext } from "../../context/BuscadorEmpresasContext";
import { sectores } from "@/presentation/utilities";

const SectoresSelect = () => {
    const { sector, handleSector } = useContext(BuscadorEmpresasContext);


    return (
        <CssTextField

            sx={{
                input: { color: 'white' },
                width: '200px',

                "& .MuiInputBase-root": {
                    height: '50px', // Cambia el alto a 50px
                },
            }}
            variant="filled"
            select
            label="Sector"
            value={sector}
            onChange={handleSector}
        //helperText="Tipo de documento"
        >
            {sectores.map((s, index) => (
                <MenuItem
                    style={{ background: 'primary', color: "white" }}
                    key={index}
                    value={s}
                >
                    {s}
                </MenuItem>
            ))}
        </CssTextField>
    )
}

export default SectoresSelect;