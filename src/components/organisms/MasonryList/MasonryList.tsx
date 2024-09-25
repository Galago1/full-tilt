import type { MediaCardWithContentProps } from 'src/components/molecules/Cards/MediaCardWithContent/MediaCardWithContent';
import MediaCardWithContent from 'src/components/molecules/Cards/MediaCardWithContent/MediaCardWithContent';
import { Masonry, MasonryProps } from '@mui/lab';
import { forwardRef } from 'react';

export interface MasonryListProps extends Omit<MasonryProps, 'children'> {
  /**
   * Card list
   */
  cards: MediaCardWithContentProps[];
  /**
   * children
   */
  children?: NonNullable<React.ReactNode>;
}

const MasonryList = forwardRef(
  ({ cards, ...props }: MasonryListProps, ref: any) => {
    return (
      <Masonry {...props} ref={ref}>
        {cards.map((card: MediaCardWithContentProps, index: number) => {
          return (
            <MediaCardWithContent
              {...card}
              key={`masonry-list-index-[${index}]`}
            />
          );
        })}
      </Masonry>
    );
  }
);

MasonryList.displayName = 'MasonryList';
export default MasonryList;
