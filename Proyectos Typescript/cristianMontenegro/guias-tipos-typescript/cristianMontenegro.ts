interface tipoVehiculo {
    tipo: string;
    marca: string;
    modelo: string;
    cilindraje: number;
    numPuertas: number;
    arrancarVehiculo(cilindraje): void;
    // cEspeciales: caracteristicasEspeciales[];
}

interface caracteristicasEspeciales {
    velocidad: number;
    suspension: boolean;
    agregarSuspension(suspension): void;
}

interface testArray {
    modelos: number[];
    caracteristicasArray: Array<string[]>;
}

const miVehiculo: tipoVehiculo= {
    tipo: 'camper',
    marca: 'GMC',
    modelo: '2024',
    cilindraje: 2000,
    numPuertas: 7,
    arrancarVehiculo(cilindraje) {
        console.log('El vehiculo arranco con un motor de ', cilindraje, 'cc')
    }
}

const miSegundoVehiculo:caracteristicasEspeciales = {
    velocidad: 60,
    suspension: false,
    agregarSuspension(suspension) {
        if (suspension = true) {
            console.log('Tu vehiculo tiene suspencion')
        } else {
            console.log('Tu vehiculo no tiene suspension')
        }
    }
}

const miTercerVehiculo: testArray = {
    modelos: [2020, 2021, 2022, 2023, 2024],
    caracteristicasArray: [
        ['Azul', 'Verde'],
        ['Rin 15', 'Rin 17'],
        []
    ]
}
