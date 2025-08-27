
import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt'

export const User =(sequelize)=>{
    const userDetails = sequelize.define('User',{
        id:{type:DataTypes.BIGINT.UNSIGNED,primaryKey:true,autoIncrement:true},
        username:{type:DataTypes.STRING(120),allowNull:false},
        email:{type:DataTypes.STRING(120),allowNull:false},
        firstName:{type:DataTypes.STRING(120),allowNull:true},
        lastName:{type:DataTypes.STRING(120),allowNull:true},
        passwordHash:{
            field:"password_hash",
            type:DataTypes.STRING(500),
            allowNull:false
        },
    },{tableName:'users',timestamps:true});

    userDetails.prototype.verifyPassword= async function (plainPassword){
        return bcrypt.compare(plainPassword,this.passwordHash);
    }
    return userDetails;
};