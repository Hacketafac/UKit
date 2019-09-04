import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import style from '../../Style';

export default class SectionListHeader extends React.PureComponent {
    static propTypes = {
        color: PropTypes.string,
        headerColor: PropTypes.string,
        sectionIndex: PropTypes.number.isRequired,
    };

    constructor(props) {
        super(props);
    }

    getBackgroundSectionStyle() {
        let indexStyle = this.props.sectionIndex % style.list.sectionHeaders.length;
        return style.list.sections[indexStyle];
    }

    getSectionStyle() {
        let indexStyle = this.props.sectionIndex % style.list.sectionHeaders.length;
        return style.list.sectionHeaders[indexStyle];
    }

    render() {
        return (
            <View style={[this.getBackgroundSectionStyle(), { backgroundColor: this.props.color }]}>
                <View style={[style.list.sectionHeaderView, this.getSectionStyle(), { backgroundColor: this.props.headerColor }]}>
                    <Text style={style.list.sectionHeaderTitle}>{this.props.title}</Text>
                </View>
            </View>
        );
    }
}
