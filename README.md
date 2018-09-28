# SA-ExRich-Exchange-Rate-Management
Exchange Rate Management

#หมายเหตุ Code ทั้ง Front-End และ Back-End ไม่สามารถ Download แล้วไป run (ng serve && mvnw spring-boot:run) ได้ เพราะเอามาแค่ไฟล์บางส่วนที่เป็นตัวอย่างการเข้าถึงข้อมูล

# Path Front-End
*   --> src
    *   '--> app
         *  '--> component
            *      '--> update-currency                              
            *           '--> update-currency.component.html  // หน้า Angular UI แบที่ใช้ Material Design เกือบหมด  
            *           '--> update-currency.component.ts    // Typescript ในการติดต่อระหว่าง Angular UI กับ controller.service.ts เพื่อที่จะ
            *                //  Get(คือ Select ใน (SQL)),Post(คือ Insert ใน (SQL)),Delete,PUT(คือ Update ใน (SQL))
            *  
         *  '--> service
            *  '--> controller 
            *       '--> controller.service.ts           // เกี่ยวกับ การเชื่องต่อระหว่าง Front-End กับ Back-End
                   
# Path Back-End
*  '--> Controller                                       // มีตัวอย่างการสร้าง @GetMap @Post @Put @Delele
*  '--> Entity                                           // มีตัวอย่างการสร้าง @ManyToOne แบบ โดยไม่ต้องสร้าง @OneToMany กับอีกคลาสที่ Join กัน 
*  '--> Repository
*  '--> ExrichServerApplication.java                     // มีตัวอย่างการ Insert ข้อมูลล่วงหน้าตรงใต้ 	@Component

