import type { Theme } from '@mui/material/styles';
//
import Accordion from './Accordion';
import Alert from './Alert';
import AppBar from './AppBar';
import Autocomplete from './Autocomplete';
import Avatar from './Avatar';
import Backdrop from './Backdrop';
import Badge from './Badge';
import Breadcrumbs from './Breadcrumbs';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Card from './Card';
import Checkbox from './Checkbox';
import Chip from './Chip';
import ControlLabel from './ControlLabel';
import CssBaseline from './CssBaseline';
import DataGrid from './DataGrid';
import Dialog from './Dialog';
import Drawer from './Drawer';
import Fab from './Fab';
import IconButton from './IconButton';
import Input from './Input';
import Link from './Link';
import Lists from './List';
import LoadingButton from './LoadingButton';
import Menu from './Menu';
import Pagination from './Pagination';
import Paper from './Paper';
import Popover from './Popover';
import Progress from './Progress';
import Radio from './Radio';
import Rating from './Rating';
import Select from './Select';
import Skeleton from './Skeleton';
import Slider from './Slider';
import Snackbar from './Snackbar';
import Stepper from './Stepper';
import SvgIcon from './SvgIcon';
import Switch from './Switch';
import Table from './Table';
import Tabs from './Tabs';
import Timeline from './Timeline';
import ToggleButton from './ToggleButton';
import Toolbar from './Toolbar';
import Tooltip from './Tooltip';
import TreeView from './TreeView';
import Typography from './Typography';

// ----------------------------------------------------------------------
const ComponentsOverrides = (theme: Theme) => {
  return Object.assign(
    Accordion(theme),
    Alert(theme),
    AppBar(theme),
    Autocomplete(theme),
    Avatar(theme),
    Backdrop(theme),
    Badge(theme),
    Breadcrumbs(theme),
    Button(theme),
    ButtonGroup(theme),
    Card(theme),
    Checkbox(theme),
    Chip(theme),
    ControlLabel(theme),
    CssBaseline(theme),
    DataGrid(theme),
    Dialog(theme),
    Drawer(theme),
    Fab(theme),
    IconButton(theme),
    Input(theme),
    Link(theme),
    Lists(theme),
    LoadingButton(theme),
    Menu(theme),
    Pagination(theme),
    Paper(theme),
    Popover(theme),
    Progress(theme),
    Radio(theme),
    Rating(theme),
    Select(theme),
    Skeleton(theme),
    Slider(theme),
    Snackbar(theme),
    Stepper(theme),
    SvgIcon(theme),
    Switch(theme),
    Table(theme),
    Tabs(theme),
    Timeline(theme),
    ToggleButton(theme),
    Toolbar(theme),
    Tooltip(theme),
    TreeView(theme),
    Typography(theme)
  );
};

export default ComponentsOverrides;
