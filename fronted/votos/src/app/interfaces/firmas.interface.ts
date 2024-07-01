export interface FirmasInterface {
    id: number;
    nombre: string;
    apellido: string;
    voto: boolean;
    voto_relacionado?: number | null;
}

