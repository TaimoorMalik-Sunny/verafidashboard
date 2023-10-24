import React, { useEffect, useState } from 'react';
import moment from 'moment';

interface DaysAgoDateProps {
  numberOfDays: number;
}

const DaysAgoDate: React.FC<DaysAgoDateProps> = ({ numberOfDays }) => {
  const [calculatedDate, setCalculatedDate] = useState<string>('');

  useEffect(() => {
    const pastDate = moment().subtract(numberOfDays, 'days');
    const formattedDate = pastDate.format('YYYY-MM-DD');

    setCalculatedDate(formattedDate);
  }, [numberOfDays]);

  return <div>{calculatedDate}</div>;
};

export default DaysAgoDate;
