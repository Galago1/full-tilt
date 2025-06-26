import { SelectChangeEvent } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { formatDate as _formatDate, parseDate } from 'src/utils/date';
import { TeamMember } from './StandUpUserList';

const createDate = (offset = 0): string => {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return _formatDate(date);
};
const today = createDate();

export const useStandUpUserList = (
  teamMembers: TeamMember[],
  tipVisibleInitial: boolean = false,
  initialDate: string = today,
  setExternalDate: (date: string) => void,
  externalSelectedIndex: number,
  setExternalSelectedIndex: React.Dispatch<React.SetStateAction<number>>,
  initialTeam: string = 'all'
) => {
  const [selectedIndexRoot, setSelectedIndexRoot] = useState(0);
  const selectedIndex = externalSelectedIndex ?? selectedIndexRoot;
  const setSelectedIndex = setExternalSelectedIndex ?? setSelectedIndexRoot;
  const [selectedTeam, setSelectedTeam] = useState(initialTeam);
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [open, setOpen] = useState(false);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const formattedDate = _formatDate(date);
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
      if (a.name === null) return 1;
      if (b.name === null) return -1;
      return a.name.localeCompare(b.name);
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
    const result = _formatDate(parseDate(dateString));
    return result;
  };

  // const formatStandUpTime = (
  //   standUpCompletedAt: string | null
  //   // hideIncomplete: boolean = false
  // ) => {
  //   if (!standUpCompletedAt) {
  //     // return hideIncomplete ? '' : 'Incomplete';
  //     return '';
  //   }
  //   const date = parse(
  //     standUpCompletedAt,
  //     DateFormat.yyyyMMddTHHmmssZ,
  //     new Date()
  //   );
  //   // return formatDistanceToNow(date, { addSuffix: true }).replace('about ', '');
  //   return formatDate(date, DateFormat.HHMM);
  // };

  const [tipVisible, setTipVisible] = useState(tipVisibleInitial);

  const handleClose = () => {
    setTipVisible(false);
  };

  const countCompletedStandUps = useCallback(
    (teamMembers: TeamMember[]): number => {
      return teamMembers.filter((member) => member.standUpCompletedAt !== null)
        .length;
    },
    []
  );

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
    tipVisible,
    handleClose,
    countCompletedStandUps,
    setOpen,
    setSelectedIndex
  };
};
