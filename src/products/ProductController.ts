import { Controller, Get, Post, Req, Res } from "@nestjs/common";


@Controller('products')
export class ProductController{

    products: any[] = [
        {
            "id": 1,
            "name": "Product 1",
        },
        {
            "id": 2,
            "name": "Product 2",
        }
    ]
    @Get("get")
    getProducts(@Req() req,@Res() res): any{

        return res.status(200).json(this.products)
    }
    @Get()
    getProducts1(@Req() req,@Res() res): any{

        return res.status(200).json("alll")
    }
    @Post()
    addProduct(@Req() req,@Res() res): any{
        const product = req.body;
        console.log(product);
        return res.status(201).json(product);
    }

}