import {Injectable} from '@nestjs/common';
import { MssqlParameter } from 'typeorm';

@Injectable()
export class BasicsService {
   myFirstGet(): object {
      return {
        service: 'Blog Backend Api',
        function: 'Basic api',
        message: 'My new Get'
    }
   }


   funtionWithParameter(myParameter: string): object {
        return {
            service: 'Blog Backend Api',
            function: 'Function with Parameter',
            message: 'My parameterized Get',
            parameter: myParameter
        }
    }


    funtionWithPost(parameters: object): object {
        return {
            service: 'Blog Backend Api',
            function: 'Function with Post',
            message: 'My Post Function',
            parameters: parameters
        }
    }


    updateWithPut(parameter: string,
        body: object): object {
            return {
                service: 'Blog Backend Api',
                function: 'Function with Put',
                message: 'My Put Function',
                parameter: parameter,
                body: body
            }
        }



        updateWithPatch(parameter: string,
        body: object): object {
            return {
                service: 'Blog Backend Api',
                function: 'Function with Put',
                message: 'My Put Function',
                parameter: parameter,
                body: body
            }
        }



        delete(parameter: string):
        object {
            return {
                service: 'Blog Backend Api',
                function: 'Function with Put',
                message: 'Funcion para eliminar',
                parameter: parameter,
            }
        }




areaTriangulo(parameter: any): object {
        const area = (parameter.base * parameter.altura) / 2;
        return {
            service: 'Blog Backend Api',
            function: 'Area del Triangulo',
            message: 'Funcion para calcular el area de un triangulo',
            parameter: parameter,
            area: area,
        }
}

sumarTresNumeros(data: any): object {
  const { n1, n2, n3 } = data;

  const suma = n1 + n2 + n3;

  return {
    service: 'Blog Backend Api',
    function: 'Suma de 3 números',
    message: 'Resultado de sumar los 3 números',
    parametros: data,
    resultado: suma,
  };
}

mayorDeTres(data: any): object {
  const { n1, n2, n3 } = data;

  const mayor = Math.max(n1, n2, n3);

  return {
    service: 'Blog Backend Api',
    function: 'Identificar el mayor de 3 números',
    message: 'Resultado del número mayor',
    parametros: data,
    mayor: mayor,
  };
}
restaDosNumeros(parameter: any): object {
  const resta = parameter.num1 - parameter.num2;

  return {
    service: 'Blog Backend Api',
    function: 'Resta de dos números',
    message: 'Función para restar dos números',
    parameter,
    resultado: resta,
  };
}
verificacionCrediticia(parameter: any): object {
  const { nombre, edad, ingresos, deudas } = parameter;

  // Reglas
  const esMayorEdad = edad >= 18;
  const ingresosMinimos = ingresos >= 500;
  const deudaPermitida = deudas / ingresos <= 0.40;

  let estado = 'RECHAZADO';
  let razon = '';

  if (!esMayorEdad) razon = 'El solicitante es menor de edad';
  else if (!ingresosMinimos) razon = 'Ingresos insuficientes';
  else if (!deudaPermitida) razon = 'Nivel de deuda demasiado alto';
  else estado = 'APROBADO';

  return {
    service: 'Blog Backend Api',
    function: 'Verificación crediticia',
    message: 'Resultado de revisión crediticia básica',
    parameter,
    estado,
    razon,
  };
}

}