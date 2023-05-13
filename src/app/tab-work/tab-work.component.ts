import { Component, ElementRef, ViewChild } from '@angular/core';

interface Tab {
  title: string;
  content: string;
}

@Component({
  selector: 'app-tab-work',
  templateUrl: './tab-work.component.html',
  styleUrls: ['./tab-work.component.css'],
})
export class TabWorkComponent {
  @ViewChild('tabWrapper') tabWrapper: ElementRef<HTMLDivElement>;
  @ViewChild('tabList') tabList: ElementRef<HTMLUListElement>;

  tabs: Tab[] = [
    { title: 'Tab 1', content: 'Content for Tab 1' },
    { title: 'Tab 2', content: 'Content for Tab 2' },
    { title: 'Tab 3', content: 'Content for Tab 3' },
    { title: 'Tab 4', content: 'Content for Tab 4' },
    { title: 'Tab 5', content: 'Content for Tab 5' },
    { title: 'Tab 6', content: 'Content for Tab 6' },
    { title: 'Tab 7', content: 'Content for Tab 7' },
    { title: 'Tab 8', content: 'Content for Tab 8' },
    { title: 'Tab 9', content: 'Content for Tab 9' },
    { title: 'Tab 10', content: 'Content for Tab 10' },
    { title: 'Tab 11', content: 'Content for Tab 11' },
    { title: 'Tab 12', content: 'Content for Tab 12' },
    { title: 'Tab 13', content: 'Content for Tab 13' },
    { title: 'Tab 14', content: 'Content for Tab 14' },
    { title: 'Tab 15', content: 'Content for Tab 15' },
    { title: 'Tab 16', content: 'Content for Tab 16' },
    { title: 'Tab 17', content: 'Content for Tab 7' },
    { title: 'Tab 18', content: 'Content for Tab 8' },
    { title: 'Tab 19', content: 'Content for Tab 9' },
    { title: 'Tab 20', content: 'Content for Tab 10' },
    { title: 'Tab 21', content: 'Content for Tab 11' },
    { title: 'Tab 22', content: 'Content for Tab 12' },
    { title: 'Tab 23', content: 'Content for Tab 13' },
    { title: 'Tab 24', content: 'Content for Tab 14' },
    { title: 'Tab 25', content: 'Content for Tab 15' },
    { title: 'Tab 26', content: 'Content for Tab 16' },
  ];
  activeTab: Tab = this.tabs[0];
  selectedTab: Tab = this.tabs[0];
  tabSelected: boolean = false;
  leftArrowDisabled: boolean = true;
  rightArrowDisabled: boolean = false;

  // activateTab(tab: Tab): void {
  //   this.activeTab = tab;
  //   this.selectedTab = tab;
  // }
  activateTab(event: MouseEvent, tab: Tab): void {
    if (this.selectedTab !== tab) {
      // remove the selected class from the previously selected tab
      const previousSelectedTab =
        this.tabList.nativeElement.querySelector('.selected');
      if (previousSelectedTab) {
        previousSelectedTab.classList.remove('selected');
      }

      // add the selected class to the clicked tab
      (event.target as HTMLElement).classList.add('selected');

      this.selectedTab = tab;
    }
  }

  scrollTabs(direction: number): void {
    const tabWrapperEl = this.tabWrapper.nativeElement;
    const tabListEl = this.tabList.nativeElement;
    const tabListWidth = tabListEl.offsetWidth;
    const wrapperWidth = tabWrapperEl.offsetWidth;
    const maxScroll = tabListWidth - wrapperWidth;
    const currentScroll = tabWrapperEl.scrollLeft;
    const newScroll = currentScroll + wrapperWidth * direction;
    // if (newScroll < 0) {
    //   tabWrapperEl.scrollTo({ left: 0, behavior: 'smooth' });
    // } else if (newScroll > maxScroll) {
    //   tabWrapperEl.scrollTo({ left: maxScroll, behavior: 'smooth' });
    // } else {
    //   tabWrapperEl.scrollTo({ left: newScroll, behavior: 'smooth' });
    // }
    console.log('NewScroll', newScroll);
    console.log('maxScroll', maxScroll);
    if (newScroll <= 0) {
      tabWrapperEl.scrollTo({ left: 0, behavior: 'smooth' });
      this.leftArrowDisabled = true;
      return;
    } else {
      this.leftArrowDisabled = false;
    }

    // Disable right arrow button if last tab is selected
    if (newScroll >= maxScroll) {
      tabWrapperEl.scrollTo({ left: maxScroll, behavior: 'smooth' });
      this.rightArrowDisabled = true;
      return;
    } else {
      this.rightArrowDisabled = false;
    }

    tabWrapperEl.scrollTo({ left: newScroll, behavior: 'smooth' });
  }
}
