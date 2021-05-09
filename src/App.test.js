import Gallery from './components/gallery';
import { mount } from 'enzyme';
import { jest } from 'jest';

describe('Case Gallery', () => {
  let wrapper;
  beforeEach(() => {
    
      wrapper = mount(<Gallery
        list={
          [
            {
              media: { m: 'url 1'  },
              link: 'link',
              title: 'Surf',
              tags: 'eitbcom 15446 g1 deportes otro undefined ramonbeiti',
              author_id: '54989697@N02'
            }, {
              media: { m: 'url 2' },
              link: 'link',
              title: 'spring abstract',
              tags: 'undefined abstract',
              author_id: "30318205@N00"
            }
          ]} />);

  })
  test('Check List', () => {
    const checkTitle = wrapper.find('.gallery_footer').map((node) => node.text());
    expect(checkTitle).toEqual(['Surf', 'spring abstract']);
    expect(checkTitle).toHaveLength(2);

    const checkTags = wrapper.find('.gallery_back').map((node) => node.text());
    expect(checkTags).toEqual(['Tag: eitbcom 15446 g1 deportes otro undefined ramonbeiti', 'Tag: undefined abstract']);
    expect(checkTags).toHaveLength(2);
  });
})
