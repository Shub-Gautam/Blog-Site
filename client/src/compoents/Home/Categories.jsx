
import { Button , makeStyles,Table,TableCell, TableRow, TableBody,TableHead} from "@material-ui/core";
import { categories } from "../../Constants/data";
import {Link} from 'react-router-dom';


const useStyles = makeStyles({
        create : {
            margin: 20,
            background:'#6495ED',
            color:"white",
            width:'86%'
        },
        table:{
            border: '1px solid rgba(224,224,224,1)'
        }
});

const Categories = () => {
    const classes = useStyles();
    return (
        <>
        <Link to='/create' style={{textDecoration:'none',color:'inherit'}}>
        <Button variant={"contained"} className={classes.create}>Create Blog</Button>
        </Link>
        
        
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Link to={`/`} style={{textDecoration:'none',color:'inherit'}} >
                            All Categories
                        </Link>
                    </TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    categories.map(category => (
                        <TableRow>
                            <TableCell>
                                <Link to={`/?category=${category}`} style={{textDecoration:'none',color:'inherit'}} >
                                    {category}
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))
                }
                {/* 
                    As you can see that there is repetition in this code so 
                    we create another folder which contains all the constants 
                    and after that we just create a for loop and display the values
                    
                    
                <TableRow>
                    <TableCell>Tech</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Tech</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Tech</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Tech</TableCell>
                </TableRow> */}
            </TableBody>
        </Table>

        </>
    )
}

export default Categories;