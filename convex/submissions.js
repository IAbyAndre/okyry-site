import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const submitForm = mutation({
    args: {
        nombre_apellidos: v.string(),
        telefono: v.string(),
        email: v.string(),
        fecha_nacimiento: v.string(),
        direccion_actual: v.string(),
        anos_experiencia: v.string(),
        detalle_plataforma: v.optional(v.string()),
        inicio: v.string(),
        horarios: v.array(v.string()),
        turnos_prolongados: v.string(),
        vehiculo_empresa: v.string(),
        accidente_previo: v.string(),
        detalle_accidente: v.optional(v.string()),
        contrato_responsabilidad: v.string(),
        normas_mantenimiento: v.string(),
        acepta_gps: v.string(),
        control_combustible: v.string(),
    },
    handler: async (ctx, args) => {
        const submissionId = await ctx.db.insert("submissions", {
            ...args,
            submittedAt: Date.now(),
        });
        return submissionId;
    },
});
