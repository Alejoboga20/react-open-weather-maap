import { shallow } from 'enzyme';
import { Label, LabelProps } from '../../../components/common/Label';

const labelProps: LabelProps = {
  labelContent: 'Label Tests',
};

describe('Label Tests', () => {
  const wrapper = shallow(<Label {...labelProps} />);

  test('should Match Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
