import { Body, Controller, Get, Post, Param, Put, Patch, Delete } from '@nestjs/common';
import { BasicsService } from './basics.service';

@Controller('basics')
export class BasicsController {
    constructor(
        private readonly basicsService: BasicsService
    ){}
    
    @Get()
    myFirstGet(): object {
    return this.basicsService.myFirstGet();
    }



    @Get(':myParameter')
    requestWithParameter(
        @Param('myParameter') myParameter: string){
            return this.basicsService
            .funtionWithParameter(myParameter);
        }



        @Post()
        create(@Body() bodyData: object){
            return this.basicsService
            .funtionWithPost(bodyData);
        }


        @Put('ID')
        update(
            @Param('ID') id: string,
            @Body() updateBody: object){
                return this.basicsService
                .updateWithPut(id, updateBody);
        }



        @Patch(':ID')
        updatePatch(
            @Param('ID') id: string,
            @Body() updateBody: object){
                return this.basicsService
                .updateWithPatch(id, updateBody);
        }

        @Delete(':id')
        delete(
            @Param('id') id: string,
        ){
            return this.basicsService.delete(id);
        }


@Post('area-triangulo')
        areaTriangulo(@Body() bodyData: object) {
            return this.basicsService
            .areaTriangulo(bodyData);
}


@Post('sumar-tres')
sumarTres(@Body() bodyData: object) {
  return this.basicsService.sumarTresNumeros(bodyData);
}

@Post('mayor-tres')
mayorTres(@Body() bodyData: object) {
  return this.basicsService.mayorDeTres(bodyData);
}   

@Post('resta-dos')
restaDos(@Body() bodyData: object) {
  return this.basicsService.restaDosNumeros(bodyData);
}
@Post('verificacion-crediticia')
verificacionCrediticia(@Body() bodyData: object) {
  return this.basicsService.verificacionCrediticia(bodyData);
}

}