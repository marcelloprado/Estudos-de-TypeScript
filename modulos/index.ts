import { paginationPerPage, Customer } from "./customer";

interface specialCustomer extends Customer{
    couponQuantity: number
}

const specialCustomer: specialCustomer = {
    couponQuantity: 10,
    name: "Maria",
    age: 32,
}