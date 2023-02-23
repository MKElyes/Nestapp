import { Controller, Get, Post,Body, Put, Param, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService:UsersService){

    }

    @Get()
    async getUsers() {
        const users = await this.userService.findUsers()
        return users
     }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        this.userService.createUser(createUserDto)
    }

    @Put(':id')
    updateUserById(@Param('id',ParseIntPipe) id: number , @Body() updatUserDto: UpdateUserDto){
        // this.userService.updateUser()
    }
}
