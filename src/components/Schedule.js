import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Schedule = () => {
  const schedule = [
    { time: '20:00', program: 'Ana Haber 20 (Canlı)' },
    { time: '21:00', program: 'Birinci Sayfa (Canlı)' },
    { time: '00:00', program: 'Gece Bakışı (Canlı)' },
    { time: '01:55', program: 'Hava Durumu' },
    { time: '02:00', program: 'Gün Sonu (Canlı)' },
    { time: '03:55', program: 'Hava Durumu' },
  ];

  return (
    <Box sx={{ backgroundColor: '#2e2e2e', color: 'white', padding: 2, borderRadius: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2, color: '#d32f2f' }}>YAYIN AKIŞI</Typography>
      <List>
        {schedule.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${item.time} - ${item.program}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Schedule;
