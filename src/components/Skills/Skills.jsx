import React from 'react';
import { Grid, Stack, Typography, Divider } from '@mui/material';
import { SkillsData } from '../../assets/data/data';

const Skills = () => {
    return (
        <>
            <Stack id='Skills' spacing={2} direction='column' justifyContent='center' sx={{ minHeight: '80vh' }}>
                <Typography mb={2} align='center' variant='h4' color='#14919B'>SKILLS</Typography>   
                <Divider />              
                <Grid container direction='row' alignItems='flex-start'>                        
                    <Grid item xs={12} md={4} mb={4}>
                        <Typography mb={2} align='center' variant='h5' color='#044E54'>Languages</Typography>                            
                        {SkillsData.languages.map((skill, index) => (
                            <Typography key={index} mb={2} align='center' color='#102A43'>{skill}</Typography>                            
                        ))}
                    </Grid>
                    <Grid item xs={12} md={4} mb={4}>
                        <Typography mb={2} align='center' variant='h5' color='#044E54'>Libraries & Frameworks</Typography>
                        {SkillsData.libraries.map((skill, index) => (
                            <Typography key={index} mb={2} align='center' color='#102A43'>{skill}</Typography>                            
                        ))}                        
                    </Grid>
                    <Grid item xs={12} md={4} mb={4}>
                        <Typography mb={2} align='center' variant='h5' color='#044E54'>Tools & Platforms</Typography>
                        {SkillsData.tools.map((skill, index) => (
                            <Typography key={index} mb={2} align='center' color='#102A43'>{skill}</Typography>                            
                        ))}
                    </Grid>
                </Grid>                    
            </Stack>
        </>
    )
}

export default Skills;
