import { SelectChangeEvent } from '@mui/material';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import { DateFormat } from 'src/types/dateFns';
import { formatDateIso, formatIso } from 'src/utils/date';
import { TeamMember } from './StandUpUserList';

const createDate = (offset = 0): string => {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return formatDateIso(date, DateFormat.yyyyMMdd);
};
const today = createDate();

export const useStandUpUserList = (
  teamMembers: TeamMember[],
  tipVisibleInitial: boolean = false,
  initialDate: string = today,
  setExternalDate: (date: string) => void,
  externalSelectedIndex: number,
  setExternalSelectedIndex: React.Dispatch<React.SetStateAction<number>>
) => {
  const [selectedIndexRoot, setSelectedIndexRoot] = useState(0);
  const selectedIndex = externalSelectedIndex ?? selectedIndexRoot;
  const setSelectedIndex = setExternalSelectedIndex ?? setSelectedIndexRoot;
  const [selectedTeam, setSelectedTeam] = useState('all');
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [open, setOpen] = useState(false);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const formattedDate = formatDateIso(date, DateFormat.yyyyMMdd);
      setSelectedDate(formattedDate);
      if (setExternalDate) {
        setExternalDate(formattedDate);
      }
    }
    setOpen(false);
  };

  useEffect(() => {
    setSelectedIndex(0);
  }, [selectedTeam, selectedDate]);

  const handleTeamChange = (event: SelectChangeEvent<string>) => {
    setSelectedTeam(event.target.value as string);
  };

  const filteredMembers = teamMembers
    .filter(
      (member) => selectedTeam === 'all' || member.teamId === selectedTeam
    )
    .sort((a, b) => {
      if (a.standUpCompletedAt === null) return 1;
      if (b.standUpCompletedAt === null) return -1;
      return (
        new Date(a.standUpCompletedAt!).getTime() -
        new Date(b.standUpCompletedAt!).getTime()
      );
    });

  const handleNext = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex < filteredMembers.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleBack = () => {
    setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const canGoNext = selectedIndex < filteredMembers.length - 1;
  const canGoBack = selectedIndex > 0;

  const formatDate = (dateString: string) => {
    return formatIso(dateString, DateFormat.MMMddyyyy);
  };

  const formatStandUpTime = (standUpCompletedAt: string | null) => {
    if (!standUpCompletedAt) {
      return 'Incomplete';
    }
    const date = parseISO(standUpCompletedAt);
    return formatDistanceToNow(date, { addSuffix: true }).replace('about ', '');
  };

  const [tipVisible, setTipVisible] = useState(tipVisibleInitial);

  const handleClose = () => {
    setTipVisible(false);
  };

  const countCompletedStandUps = (teamMembers: TeamMember[]): number => {
    return teamMembers.filter((member) => member.standUpCompletedAt !== null)
      .length;
  };

  return {
    selectedIndex,
    selectedTeam,
    selectedDate,
    open,
    handleDateChange,
    handleTeamChange,
    filteredMembers,
    handleNext,
    handleBack,
    canGoNext,
    canGoBack,
    formatDate,
    formatStandUpTime,
    tipVisible,
    handleClose,
    countCompletedStandUps,
    setOpen,
    setSelectedIndex
  };
};
