import type { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  BookmarkIcon,
  BusinessModelIcon,
  CheckIcon,
  ChartUpIcon,
  CheckCircleBrokenIcon,
  CheckVerifiedIcon,
  CopyIcon,
  DotsGridIcon,
  DotsHorizontalIcon,
  DotsVerticalIcon,
  DownloadIcon,
  DownloadCircularIcon,
  DownloadCloudIcon,
  EditIcon,
  HeartIcon,
  BellIcon,
  HomeBasicOutlineIcon,
  HomeOutlineIcon,
  HomeShinglesIcon,
  InfoCircleIcon,
  LinkBrokenIcon,
  ListIcon,
  MenuIcon,
  PencilDrawIcon,
  PlusIcon,
  SearchLgIcon,
  SearchMdIcon,
  SearchSmIcon,
  SettingsIcon,
  ShareIcon,
  ShareBoxIcon,
  ShareMessageIcon,
  SlashCircle01Icon,
  SlashCircle02Icon,
  TagIcon,
  TrashIcon,
  UploadIcon,
  XCircleIcon,
  XCloseIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ChevronDownIcon,
  StarIcon,
  AlertTriangleIcon,
  XSquareIcon,
  MinusSquareIcon,
  PlusSquareIcon,
  SquareIcon,
  CreditCardRefreshIcon,
  AccountSettingsIcon,
  AmexIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  CreditCardShieldIcon,
  CursorClickIcon,
  DiscoverIcon,
  DotIcon,
  Edit05Icon,
  GalagoLogoIcon,
  InventoryIcon,
  JcbIcon,
  LayersThree01Icon,
  LayersTwo01Icon,
  LoginIcon,
  LogoutIcon,
  MastercardIcon,
  PurchasesIcon,
  SignUpIcon,
  SupportIcon,
  UntitledFullIcon,
  UntitledLogoIcon,
  VisaIcon
} from '../theme/overrides/CustomIcons';
import type { Theme, TypographyProps } from '@mui/material';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import BlockContainer from 'src/components/organisms/BlockContainer/BlockContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Foundation/Icons',
  component: Typography
  // parameters: {
  //   docs: {
  //     page: null //'Icons'
  //   }
  // }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Typography>;

const list = [
  { icon: BookmarkIcon, name: 'Bookmark' },
  { icon: BusinessModelIcon, name: 'Business Model' },
  { icon: BellIcon, name: 'Bell' },
  { icon: ChartUpIcon, name: 'Chart Up' },
  { icon: CheckIcon, name: 'Check' },
  { icon: CheckCircleIcon, name: 'Check Circle' },
  { icon: CheckCircleBrokenIcon, name: 'Check Circle Broken' },
  { icon: CheckVerifiedIcon, name: 'Check Verified' },
  { icon: CopyIcon, name: 'Copy' },
  { icon: DotsGridIcon, name: 'Dots Grid' },
  { icon: DotsHorizontalIcon, name: 'Dots Horizontal' },
  { icon: DotsVerticalIcon, name: 'Dots Vertical' },
  { icon: DownloadIcon, name: 'Download' },
  { icon: DownloadCircularIcon, name: 'Download Circular' },
  { icon: DownloadCloudIcon, name: 'Download Cloud' },
  { icon: EditIcon, name: 'Edit' },
  { icon: HeartIcon, name: 'Heart' },
  { icon: HomeBasicOutlineIcon, name: 'Home Basic Outline' },
  { icon: HomeOutlineIcon, name: 'Home Outline' },
  { icon: HomeShinglesIcon, name: 'Home Shingles' },
  { icon: InfoCircleIcon, name: 'Info Circle' },
  { icon: LinkBrokenIcon, name: 'Link Broken' },
  { icon: ListIcon, name: 'List' },
  { icon: MenuIcon, name: 'Menu' },
  { icon: PencilDrawIcon, name: 'Pencil Draw' },
  { icon: PlusIcon, name: 'Plus' },
  { icon: SettingsIcon, name: 'Settings' },
  { icon: SearchLgIcon, name: 'Search Lg' },
  { icon: SearchMdIcon, name: 'Search Md' },
  { icon: SearchSmIcon, name: 'Search Sm' },
  { icon: ShareIcon, name: 'Share' },
  { icon: ShareBoxIcon, name: 'Share Box' },
  { icon: ShareMessageIcon, name: 'Share Message' },
  { icon: SlashCircle01Icon, name: 'Slash Circle 01' },
  { icon: SlashCircle02Icon, name: 'Slash Circle 02' },
  { icon: TagIcon, name: 'Tag' },
  { icon: TrashIcon, name: 'Trash' },
  { icon: UploadIcon, name: 'Upload' },
  { icon: XCircleIcon, name: 'X Circle' },
  { icon: XCloseIcon, name: 'X Close' },
  { icon: XSquareIcon, name: 'X Square' },
  { icon: MinusSquareIcon, name: 'Minus Square' },
  { icon: PlusSquareIcon, name: 'Plus Square' },
  { icon: SquareIcon, name: 'Square' },
  { icon: ChevronDownIcon, name: 'Chevron Down' },
  { icon: StarIcon, name: 'Star' },
  { icon: AlertCircleIcon, name: 'Alert Circle' },
  { icon: AlertTriangleIcon, name: 'Alert Triangle' },
  { icon: CreditCardRefreshIcon, name: 'Credit Card Refresh' },
  { icon: CreditCardShieldIcon, name: 'Credit Card Shield' },
  { icon: LayersThree01Icon, name: 'Layers Three 01' },
  { icon: LayersTwo01Icon, name: 'Layers Two 01' },
  { icon: CursorClickIcon, name: 'Cursor Click' },
  { icon: DotIcon, name: 'Dot' },
  { icon: Edit05Icon, name: 'Edit 05' },
  { icon: AccountSettingsIcon, name: 'Account Settings' },
  { icon: InventoryIcon, name: 'Inventory' },
  { icon: PurchasesIcon, name: 'Purchases' },
  { icon: SupportIcon, name: 'Support' },
  { icon: ArrowUpIcon, name: 'Arrow Up' },
  { icon: ArrowUpRightIcon, name: 'Arrow Up Right' },
  { icon: LogoutIcon, name: 'Logout' },
  { icon: LoginIcon, name: 'Login' },
  { icon: SignUpIcon, name: 'Sign Up' },
  { icon: UntitledFullIcon, name: 'Untitled Full' },
  { icon: UntitledLogoIcon, name: 'Untitled Logo' },
  { icon: GalagoLogoIcon, name: 'Galago Logo' },
  { icon: AmexIcon, name: 'Amex' },
  { icon: DiscoverIcon, name: 'Discover' },
  { icon: JcbIcon, name: 'Jcb' },
  { icon: MastercardIcon, name: 'Mastercard' },
  { icon: VisaIcon, name: 'Visa' }
];

const Template: ComponentStory<typeof Typography> = (args: TypographyProps) => {
  return (
    <BlockContainer
      title="Icons"
      description="General icons typically used in most apps."
    >
      <List
        sx={{
          display: 'flex',
          flexFlow: 'column wrap',
          gap: (theme: Theme) => theme.spacing(0, 3.75),
          height: '100vh',
          overflow: 'auto'
        }}
      >
        {list.map((listItem: any, idx) => (
          <ListItem key={`icon-list-item-${idx}`} sx={{ width: 'auto' }}>
            <ListItemIcon>
              {listItem.icon({ ...args, sx: listItem.sx })}
            </ListItemIcon>
            <ListItemText primary={listItem.name} />
          </ListItem>
        ))}
      </List>
    </BlockContainer>
  );
};

export const UiIcons = Template.bind({});
UiIcons.args = {};
